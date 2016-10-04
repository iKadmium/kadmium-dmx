using kadmium_osc_dmx_dotnet_core.Fixtures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Xml.Linq;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class PanTilt16BitSolver : FixtureSolver
    {
        public bool PanInverted { get; set; }
        public bool TiltInverted { get; set; }

        public Dictionary<string, RestrictableMovementAxis> Axis { get; set; }
        
        public bool Eased { get; set; }

        private RandomMovement RandomMovement { get; set; }

        public PanTilt16BitSolver(Fixture fixture, IEnumerable<string> options) : base(fixture, "Pan", "Tilt", "RandomMove")
        {
            Axis = new Dictionary<string, RestrictableMovementAxis>();
            foreach(MovementAxis movement in fixture.Definition.Axis)
            {
                RestrictableMovementAxis axis;
                if(movement.Name == "Pan" && options.Contains("RestrictedPan"))
                {
                    axis = new RestrictableMovementAxis(movement, -90, 90);
                }
                else if(movement.Name == "Tilt" && options.Contains("RestrictedTilt"))
                {
                    axis = new RestrictableMovementAxis(movement, 0, 90);
                }
                else
                {
                    axis = new RestrictableMovementAxis(movement);
                }
                Axis.Add(movement.Name, axis);
            }
            PanInverted = options.Contains("PanInverted");
            TiltInverted = options.Contains("TiltInverted");
            RandomMovement = new RandomMovement("Pan", "Tilt");
        }

        internal static bool SuitableFor(Definition definition)
        {
            return definition.Channels.Any(x => x.Name == "PanCoarse") ||
                definition.Channels.Any(x => x.Name == "TiltCoarse");

        }
        
        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            foreach (RestrictableMovementAxis axis in Axis.Values)
            {
                float value = Attributes[axis.Name].Value;
                if (Attributes["RandomMove"].Value > 0)
                {
                    RandomMovement.Update(Attributes["RandomMove"].Value);
                    value = RandomMovement.Axis[axis.Name].Value;
                }
                value = axis.RestrictedToOriginal(value);
                UInt16 value16bit = (UInt16)(value * UInt16.MaxValue);

                byte[] valueBytes = BitConverter.GetBytes(value16bit);
                float valueFine = (float)valueBytes[0] / (float)byte.MaxValue;
                float valueCoarse = (float)valueBytes[1] / (float)byte.MaxValue;

                Attributes[axis.Name + "Coarse"].Value = valueCoarse;
                if (Attributes.ContainsKey(axis.Name + "Fine"))
                {
                    Attributes[axis.Name + "Fine"].Value = valueFine;
                }
            }
        }
    }

    class RandomMovement
    {
        public static float MAX_SPEED = 0.005f;

        public Dictionary<string, AnimatableAxis> Axis { get; set; }

        public RandomMovement(params string[] axisNames)
        {
            Axis = new Dictionary<string, AnimatableAxis>();
            foreach (string name in axisNames)
            {
                AnimatableAxis animAxis = new AnimatableAxis(name);
                Axis.Add(name, animAxis);
            }
        }

        public void Update(float speed)
        {
            foreach(AnimatableAxis axis in Axis.Values)
            {
                float percentageIncrease = MAX_SPEED * speed / axis.Distance;
                axis.Percentage += percentageIncrease;
                if(axis.Percentage >= 1.0f)
                {
                    axis.PickNewTarget();
                }
            }
        }
    }

    class AnimatableAxis
    {
        public string Name { get; set; }
        public float SourceValue { get; set; }
        public float TargetValue { get; set; }
        public float Distance { get { return Math.Abs(TargetValue - SourceValue); } }
        public float Percentage{ get; set; }
        public float Value
        {
            get
            {
                float value = Ease(Percentage, SourceValue, TargetValue, 1.0f);
                if(value > 1.0f)
                {
                    value = 1.0f;
                }
                return value;
            }
        }

        public void PickNewTarget()
        {
            SourceValue = Value;
            TargetValue = (float)MasterController.Instance.Random.NextDouble();
            Percentage = 0.0f;
        }

        public AnimatableAxis(string name, float sourceValue = 0.5f)
        {
            Name = name;
            TargetValue = sourceValue;
            PickNewTarget();
        }

        public static float Ease(float t, float b, float c, float d)
        {
            float firstPercentage = Easing.EaseInOut(t, EasingType.Quadratic);
            return firstPercentage * c + (1 - firstPercentage) * b;
        }
        
    }

    /// <summary>The easing.</summary>
    public static class Easing
    {
        // Adapted from source : http://www.robertpenner.com/easing/

        /// <summary>The ease.</summary>
        /// <param name="linearStep">The linear step.</param>
        /// <param name="acceleration">The acceleration.</param>
        /// <param name="type">The type.</param>
        /// <returns>The ease.</returns>
        public static float Ease(double linearStep, float acceleration, EasingType type)
        {
            float easedStep = acceleration > 0
                                  ? EaseIn(linearStep, type)
                                  : acceleration < 0
                                        ? EaseOut(linearStep, type)
                                        : (float)linearStep;

            return MathHelper.Lerp(linearStep, easedStep, Math.Abs(acceleration));
        }

        /// <summary>The ease in.</summary>
        /// <param name="linearStep">The linear step.</param>
        /// <param name="type">The type.</param>
        /// <returns>The ease in.</returns>
        /// <exception cref="NotImplementedException"></exception>
        public static float EaseIn(double linearStep, EasingType type)
        {
            switch (type)
            {
                case EasingType.Step:
                    return linearStep < 0.5 ? 0 : 1;
                case EasingType.Linear:
                    return (float)linearStep;
                case EasingType.Sine:
                    return Sine.EaseIn(linearStep);
                case EasingType.Quadratic:
                    return Power.EaseIn(linearStep, 2);
                case EasingType.Cubic:
                    return Power.EaseIn(linearStep, 3);
                case EasingType.Quartic:
                    return Power.EaseIn(linearStep, 4);
                case EasingType.Quintic:
                    return Power.EaseIn(linearStep, 5);
            }

            throw new NotImplementedException();
        }

        /// <summary>The ease out.</summary>
        /// <param name="linearStep">The linear step.</param>
        /// <param name="type">The type.</param>
        /// <returns>The ease out.</returns>
        /// <exception cref="NotImplementedException"></exception>
        public static float EaseOut(double linearStep, EasingType type)
        {
            switch (type)
            {
                case EasingType.Step:
                    return linearStep < 0.5 ? 0 : 1;
                case EasingType.Linear:
                    return (float)linearStep;
                case EasingType.Sine:
                    return Sine.EaseOut(linearStep);
                case EasingType.Quadratic:
                    return Power.EaseOut(linearStep, 2);
                case EasingType.Cubic:
                    return Power.EaseOut(linearStep, 3);
                case EasingType.Quartic:
                    return Power.EaseOut(linearStep, 4);
                case EasingType.Quintic:
                    return Power.EaseOut(linearStep, 5);
            }

            throw new NotImplementedException();
        }

        /// <summary>The ease in out.</summary>
        /// <param name="linearStep">The linear step.</param>
        /// <param name="easeInType">The ease in type.</param>
        /// <param name="easeOutType">The ease out type.</param>
        /// <returns>The ease in out.</returns>
        public static float EaseInOut(double linearStep, EasingType easeInType, EasingType easeOutType)
        {
            return linearStep < 0.5 ? EaseInOut(linearStep, easeInType) : EaseInOut(linearStep, easeOutType);
        }

        /// <summary>The ease in out.</summary>
        /// <param name="linearStep">The linear step.</param>
        /// <param name="type">The type.</param>
        /// <returns>The ease in out.</returns>
        /// <exception cref="NotImplementedException"></exception>
        public static float EaseInOut(double linearStep, EasingType type)
        {
            switch (type)
            {
                case EasingType.Step:
                    return linearStep < 0.5 ? 0 : 1;
                case EasingType.Linear:
                    return (float)linearStep;
                case EasingType.Sine:
                    return Sine.EaseInOut(linearStep);
                case EasingType.Quadratic:
                    return Power.EaseInOut(linearStep, 2);
                case EasingType.Cubic:
                    return Power.EaseInOut(linearStep, 3);
                case EasingType.Quartic:
                    return Power.EaseInOut(linearStep, 4);
                case EasingType.Quintic:
                    return Power.EaseInOut(linearStep, 5);
            }

            throw new NotImplementedException();
        }

        #region Nested type: Power

        /// <summary>The power.</summary>
        private static class Power
        {
            /// <summary>The ease in.</summary>
            /// <param name="s">The s.</param>
            /// <param name="power">The power.</param>
            /// <returns>The ease in.</returns>
            public static float EaseIn(double s, int power)
            {
                return (float)Math.Pow(s, power);
            }

            /// <summary>The ease out.</summary>
            /// <param name="s">The s.</param>
            /// <param name="power">The power.</param>
            /// <returns>The ease out.</returns>
            public static float EaseOut(double s, int power)
            {
                int sign = power % 2 == 0 ? -1 : 1;
                return (float)(sign * (Math.Pow(s - 1, power) + sign));
            }

            /// <summary>The ease in out.</summary>
            /// <param name="s">The s.</param>
            /// <param name="power">The power.</param>
            /// <returns>The ease in out.</returns>
            public static float EaseInOut(double s, int power)
            {
                s *= 2;
                if (s < 1) return EaseIn(s, power) / 2;
                int sign = power % 2 == 0 ? -1 : 1;
                return (float)(sign / 2.0 * (Math.Pow(s - 2, power) + sign * 2));
            }
        }

        #endregion

        #region Nested type: Sine

        /// <summary>The sine.</summary>
        private static class Sine
        {
            /// <summary>The ease in.</summary>
            /// <param name="s">The s.</param>
            /// <returns>The ease in.</returns>
            public static float EaseIn(double s)
            {
                return (float)Math.Sin(s * MathHelper.HalfPi - MathHelper.HalfPi) + 1;
            }

            /// <summary>The ease out.</summary>
            /// <param name="s">The s.</param>
            /// <returns>The ease out.</returns>
            public static float EaseOut(double s)
            {
                return (float)Math.Sin(s * MathHelper.HalfPi);
            }

            /// <summary>The ease in out.</summary>
            /// <param name="s">The s.</param>
            /// <returns>The ease in out.</returns>
            public static float EaseInOut(double s)
            {
                return (float)(Math.Sin(s * MathHelper.Pi - MathHelper.HalfPi) + 1) / 2;
            }
        }

        #endregion
    }

    /// <summary>The easing type.</summary>
    public enum EasingType
    {
        /// <summary>The step.</summary>
        Step,

        /// <summary>The linear.</summary>
        Linear,

        /// <summary>The sine.</summary>
        Sine,

        /// <summary>The quadratic.</summary>
        Quadratic,

        /// <summary>The cubic.</summary>
        Cubic,

        /// <summary>The quartic.</summary>
        Quartic,

        /// <summary>The quintic.</summary>
        Quintic
    }

    /// <summary>The math helper.</summary>
    public static class MathHelper
    {
        /// <summary>The pi.</summary>
        public const float Pi = (float)Math.PI;

        /// <summary>The half pi.</summary>
        public const float HalfPi = (float)(Math.PI / 2);

        /// <summary>The lerp.</summary>
        /// <param name="from">The from.</param>
        /// <param name="to">The to.</param>
        /// <param name="step">The step.</param>
        /// <returns>The lerp.</returns>
        public static float Lerp(double from, double to, double step)
        {
            return (float)((to - from) * step + from);
        }
    }

}

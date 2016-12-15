using System;
using System.Collections.Generic;
using kadmium_osc_dmx_dotnet_core.Fixtures;

namespace kadmium_osc_dmx_dotnet_core.Solvers
{
    public class RandomMove : FixtureSolver
    {
        public static float MAX_SPEED = 0.005f;
        public Dictionary<string, AnimatableAxis> Axis { get; set; }

        public RandomMove(Fixture fixture) : base(fixture, "RandomMove")
        {
            Axis = new Dictionary<string, AnimatableAxis>();
            foreach (string name in fixture.MovementAxis.Keys)
            {
                AnimatableAxis animAxis = new AnimatableAxis(name);
                Axis.Add(name, animAxis);
            }
        }

        public override void Solve(Dictionary<string, Attribute> Attributes)
        {
            if (Attributes["RandomMove"].Value > 0)
            {
                float speed = Attributes["RandomMove"].Value;
                foreach (AnimatableAxis axis in Axis.Values)
                {
                    float percentageIncrease = MAX_SPEED * speed / axis.Distance;
                    axis.Percentage += percentageIncrease;
                    if (axis.Percentage >= 1.0f)
                    {
                        axis.PickNewTarget();
                    }
                    Attributes[axis.Name].Value = axis.Value;
                }
            }
        }

        internal static bool SuitableFor(Definition definition)
        {
            return definition.Axis.Count > 0;
        }
    }

    public class AnimatableAxis
    {
        private Random Random { get; }
        public string Name { get; set; }
        public float SourceValue { get; set; }
        public float TargetValue { get; set; }
        public float Distance { get { return Math.Abs(TargetValue - SourceValue); } }
        public float Percentage { get; set; }
        public float Value
        {
            get
            {
                float value = Ease(Percentage, SourceValue, TargetValue, 1.0f);
                if (value > 1.0f)
                {
                    value = 1.0f;
                }
                if (value < 0.0f)
                {
                    value = 0.0f;
                }
                return value;
            }
        }

        public void PickNewTarget()
        {
            SourceValue = Value;
            TargetValue = (float)Random.NextDouble();
            Percentage = 0.0f;
        }

        public AnimatableAxis(string name, float sourceValue = 0.5f)
        {
            Name = name;
            TargetValue = sourceValue;
            Random = new Random();
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

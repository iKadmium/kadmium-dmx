import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export class AnimationLibrary
{
	public static animations(duration: number = 400): AnimationTriggerMetadata[]
	{
		return [
			AnimationLibrary.slideIn(duration),
			AnimationLibrary.slideOut(duration),
			AnimationLibrary.slideInOut(duration),
			AnimationLibrary.slideInBackOut(duration),
			AnimationLibrary.fadeIn(duration),
			AnimationLibrary.fadeOut(duration),
			AnimationLibrary.slideInLeft(duration),
			AnimationLibrary.growX(duration),
			AnimationLibrary.growY(duration),
			AnimationLibrary.shrinkY(duration)
		];
	}

	public static slideIn(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('slideIn', [
			transition(':enter', [
				style({ transform: "translateX(100%)" }),
				animate(`${duration}ms ease-out`)
			])
		]);
	}

	public static slideOut(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('slideOut', [
			transition(':leave', [
				animate(`${duration}ms ease-in`),
				style({ transform: "translateX(-100%)" }),
			])
		]);
	}

	public static slideInOut(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('slideInOut', [
			transition(':enter', [
				style({ transform: "translateX(100%)" }),
				animate(`${duration}ms ease-out`)
			]),
			transition(':leave', [
				animate(`${duration}ms ease-out`),
				style({ transform: "translateX(-100%)" })
			])
		]);
	}

	public static slideInBackOut(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('slideInBackOut', [
			transition(':enter', [
				style({ right: "-2em" }),
				animate(`${duration}ms ease-in-out`)
			]),
			transition(':leave', [
				animate(`${duration}ms ease-in-out`),
				style({ right: "-2em" })
			])
		]);
	}

	public static slideInLeft(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('slideInLeft', [
			transition(':enter', [
				style({ transform: "translateX(-100%)" }),
				animate(`${duration}ms ease-out`)
			])
		]);
	}

	public static fadeIn(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate(`${duration}ms ease-out`)
			])
		]);
	}

	public static growX(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('growX', [
			transition(':enter', [
				style({ width: 0 }),
				animate(`${duration}ms ease-out`)
			])
		]);
	}

	public static growY(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('growY', [
			transition(':enter', [
				style({ height: 0 }),
				animate(`${duration}ms ease-out`)
			])
		]);
	}

	public static shrinkY(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('shrinkY', [
			transition(':leave', [
				animate(`${duration}ms ease-out`),
				style({ height: 0 })
			])
		]);
	}

	public static fadeOut(duration: number = 400): AnimationTriggerMetadata
	{
		return trigger('fadeOut', [
			transition(':leave', [
				animate(`${duration}ms ease-out`),
				style({ opacity: 0 })
			])
		]);
	}
}

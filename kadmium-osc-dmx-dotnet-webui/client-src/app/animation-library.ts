import { trigger, state, style, transition, animate } from "@angular/animations";
import { AnimationTriggerMetadata } from "@angular/animations";

export class AnimationLibrary
{
    public static slideFadeIn(): AnimationTriggerMetadata
    {
        return trigger('slideFadeIn', [
            state('void', style({
                opacity: 0,
                transform: 'translateX(500px)'
            })),
            state('*', style({
                opacity: 1
            })),
            transition('void => *', animate("500ms ease-out"))
        ]);
    }
}

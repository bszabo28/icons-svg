import Icon from './icon.class';
import IAnimatable from '../interfaces/Animatable.interface';
import Animatable from '../mixins/animatable.class';
import applyMixins from '../mixins/applyMixins.func';

export default class AnimatedIcon extends Icon implements IAnimatable {

	protected animateEndEvents:string[] = ['webkitAnimationEnd', 'mozAnimationEnd', 'animationend',];
	protected iconElements:Array<Element>;
	public startAnimate: () => void;
	public stopAnimate: () => void;

	constructor(protected iconset) {
		super(iconset);
	}
}
applyMixins(AnimatedIcon, [Animatable]);

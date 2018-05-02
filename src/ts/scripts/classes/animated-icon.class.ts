import Icon from './icon.class';
import Animatable from '../mixins/animatable.class';
import applyMixins from '../mixins/applyMixins.func';

export default class AnimatedIcon extends Icon implements Animatable {

	public iconElements:Array<Element>;
	public startAnimate: () => void;
	public stopAnimate: () => void;

	constructor(protected iconset) {
		super(iconset);
	}
}
applyMixins(AnimatedIcon, [Animatable]);

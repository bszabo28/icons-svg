import IAnimatable from '../interfaces/Animatable.interface';

export default class Animatable implements IAnimatable {

	protected iconElements:Array<Element>;
	protected animateEndEvents:string[];

	protected mouseOverHandler(event) {
		if (event.target instanceof SVGSVGElement) {
			const parent = event.target.parentElement;

			if (!parent.classList.contains('animated')) {
				parent.classList.add('animated');
			}
		}
	}

	protected animateEndHandler(event) {
		event.target.classList.remove('animated');
	}

	public startAnimate() {

		Array
			.from(this.iconElements)
			.forEach(
				(iconTag:Element) => {
					this.animateEndEvents.forEach((event:string) => {
						iconTag.addEventListener(event, this.animateEndHandler);
					});
					iconTag.addEventListener('mouseover', this.mouseOverHandler);
				}
			);
	}

	public stopAnimate() {

		Array
			.from(this.iconElements)
			.forEach(
				(iconTag:Element) => {
					iconTag.removeEventListener('mouseover', this.mouseOverHandler);
					this.animateEndEvents.forEach((event:string) => {
						iconTag.removeEventListener(event, this.animateEndHandler);
					});
				});
	}
}

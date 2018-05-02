export default class Animatable {

	public iconElements:Array<Element>;

	public startAnimate() {

		Array
			.from(this.iconElements)
			.forEach(
				(iconTag:Element) => {

					const events:string[] = ['webkitAnimationEnd', 'mozAnimationEnd', 'animationend',];

					events.forEach(function(event:string) {
						iconTag.addEventListener(event, function() {
							this.classList.remove('animated');
						});
					});

					iconTag.addEventListener('mouseover', function(event) {

						if (event.target instanceof SVGSVGElement) {
							const parent = event.target.parentElement;

							if (!parent.classList.contains('animated')) {
								parent.classList.add('animated');
							}
						}
					});
				}
			);
	}

	public stopAnimate() {

	}
}

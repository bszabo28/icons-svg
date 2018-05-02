export default class Icon {

	public iconElements:Array<Element>;

	public constructor(protected iconset) {

		for (let name in this.iconset) {
			if (this.iconset.hasOwnProperty(name)) {
				const icon = this.iconset[name];
				const render:string = `<svg viewBox="${icon.viewBox}"><use xlink:href="#${icon.id}" /></svg>`
				const iconElements = Array.from(document.querySelectorAll(`.icon-${name}`));

				iconElements.forEach(
					(iconTag:Element) =>
					{iconTag.innerHTML = render;}
				);

				this.iconElements = (this.iconElements || []).concat(iconElements);
			}
		}
	}
}

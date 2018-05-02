// https://www.typescriptlang.org/docs/handbook/mixins.html
export default function applyMixins(derivedCtor: any, baseCtors: any[]) {
	baseCtors.forEach(baseCtor => {
		Object
			.getOwnPropertyNames(baseCtor.prototype)
			.forEach(
				name => {
					derivedCtor.prototype[name] = baseCtor.prototype[name];
				}
			);
	});
}

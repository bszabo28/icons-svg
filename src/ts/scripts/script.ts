import AnimatedIcon from './classes/animated-icon.class';
import IconSet from './config/icon-set';
import * as domready from 'domready';
import 'styles/style.scss';

domready(() => {
	const icons = new AnimatedIcon(IconSet);
	icons.startAnimate();
});

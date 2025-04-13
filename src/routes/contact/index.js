import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>Contact me</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<div>Hi!</div>
					<div>If you are interested in my work and are looking to contact me for a contract please use the form below.</div>
					<div>&nbsp;</div>
					<div>Cheers 🍻</div>
				</p>
				<div style={{ width: '100%', overflow: 'hidden' }}>
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSflqwg7uIH0YYl5H-Bq6-ErImqgdbE5po6SAmEbJgIXipm-jQ/viewform?embedded=true"
						width="100%"
						height="824"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
						loading="lazy"
						style="border: none;"
					>
						Loading…
					</iframe>
				</div>
			</div>
		</div>
	);
};

export default photographs;
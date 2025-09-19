import pascaLogo from '../assets/pasca-logo.png';
import Calendar from './Calendar';
import HorizontalRule from './HorizontalRule';

function findTheCalendar() {
	alert('xyzzy');
}

const Welcome = () => (
	<div id="page">
		<section id="hero">
			<p>
				Plant & Soul California (PASCA) has been building community since 1999 around regenerative land use, food access, and native ecology. We cultivate a reciprocal, empowered relationship with nature.
			</p>
		</section>
		<HorizontalRule />
		<img src={pascaLogo.src}/>
		<button onClick={findTheCalendar}>
			Find that calendar and do the thing
		</button>
		<section id="calendar">
			<h2>Events</h2>
			<div className="calendar-container">
				<Calendar/>
			</div>
		</section>
	</div>
);

export default Welcome;
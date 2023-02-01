import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
"https://media.gettyimages.com/id/470863648/vector/india-country-map.jpg?s=612x612&w=0&k=20&c=0E5DKB51c0E3AKk_8pPTWZhBHbi1O2pocYNxlEE-sfc=" />
					</div>
					<li><a href="#courses">States</a></li>
					<li><a href="#tutorials">Live Events</a></li>
					<li><a href="#jobs">Job Opportunities</a></li>
					<li><a href='#students'>Travel Destinations</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							Test 1
						</h1>
						<p class="text-small">
							Test 2
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Test 3
						</h1>
						<p class="text-small">
							Test 4
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Test 5
						</h1>
						<p class="text-small">
							Test 6
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Test 7
						</h1>
						<p class="text-small">
							Test 8
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App

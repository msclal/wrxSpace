const doc = document;
const menuOpen = doc.querySelector('.menu');
const menuClose = doc.querySelector('.close');
const overlay = doc.querySelector('.overlay');

menuOpen.addEventListener('click', () => {
	overlay.classList.add('overlay--active');
});

menuClose.addEventListener('click', () => {
	overlay.classList.remove('overlay--active');
});

// Filter Role
const selectBtn = document.querySelector('.select-btn'),
	items = document.querySelectorAll('.item');

selectBtn.addEventListener('click', () => {
	selectBtn.classList.toggle('open');
});

items.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('checked');

		let checked = document.querySelectorAll('.checked'),
			btnText = document.querySelector('.btn-text');

		if (checked && checked.length == 1) {
			btnText.innerText = 'Select Role';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else if (checked && checked.length > 1) {
			btnText.innerText = 'Select Role';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else {
			btnText.innerText = 'Select Role';
			document.getElementById('generateMatches').style.backgroundColor = 'darkgray'
		}
	});
});

// Filter Department
const selectBtnDepartment = document.querySelector('.select-btn1'),
	departmentItems = document.querySelectorAll('.departmentItem');

selectBtnDepartment.addEventListener('click', () => {
	selectBtnDepartment.classList.toggle('open');
});

departmentItems.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('checked');

		let checked = document.querySelectorAll('.checked'),
			btnText = document.querySelector('.btn-text1');

		if (checked && checked.length == 1) {
			btnText.innerText = 'Select Department';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else if (checked && checked.length > 1) {
			btnText.innerText = 'Select Department';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else {
			btnText.innerText = 'Select Department';
			document.getElementById('generateMatches').style.backgroundColor = 'darkgray'
		}
	});
});

// Filter Location
const selectBtnLocation = document.querySelector('.select-btn2'),
	locationItems = document.querySelectorAll('.locationItem');

selectBtnLocation.addEventListener('click', () => {
	selectBtnLocation.classList.toggle('open');
});

locationItems.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('checked');

		let checkedLoc = document.querySelectorAll('.checked'),
			btnText = document.querySelector('.btn-text2');

		if (checkedLoc && checkedLoc.length == 1) {
			btnText.innerText = 'Select Location';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else if (checkedLoc && checkedLoc.length > 1) {
			alert('You may only select one location at a time.')
		} else {
			btnText.innerText = 'Select Location';
			document.getElementById('generateMatches').style.backgroundColor = 'darkgray'
		}
	});
});

// Filter Skills
const selectBtnSkills = document.querySelector('.select-btn3'),
	skillsItems = document.querySelectorAll('.skillsItem');

	selectBtnSkills.addEventListener('click', () => {
		selectBtnSkills.classList.toggle('open');
});

skillsItems.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('checked');

		let checked = document.querySelectorAll('.checked'),
			btnText = document.querySelector('.btn-text3');

		if (checked && checked.length == 1) {
			btnText.innerText = 'Select Skills';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else if (checked && checked.length > 1) {
			btnText.innerText = 'Select Skills';
			document.getElementById('generateMatches').style.backgroundColor = '#0088a9'
		} else {
			btnText.innerText = 'Select Skills';
			document.getElementById('generateMatches').style.backgroundColor = 'darkgray'
		}
	});
});

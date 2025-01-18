const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
	task.addEventListener('dragstart', e => {
		e.target.classList.add('dragging');
	});

	task.addEventListener('dragend', e => {
		e.target.classList.remove('dragging');
	});
});

columns.forEach(column => {
	column.addEventListener('dragover', e => {
		e.preventDefault();
		column.classList.add('over');
	});

	column.addEventListener('dragleave', e => {
		column.classList.remove('over');
	});

	column.addEventListener('drop', e => {
		const draggedTask = document.querySelector('.dragging');
		column.appendChild(draggedTask);
		column.classList.remove('over');
	});
});

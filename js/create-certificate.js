document.addEventListener('DOMContentLoaded', function () {
		let buttonCreateTable = document.querySelector('.button-create-table');

		buttonCreateTable.addEventListener('click', function () {
			let nameCertificate = document.querySelector('.name-certificate');
			let rowsCertificate = document.querySelector('.rows-certificate');
			let row =  rowsCertificate.value;
  			// проверяем на правильность введенных данных
  			if (row < 1 || row == 0 ) {
  				alert('Error! You must enter a positive number.');
  				throw "stop";
  			}
			let divСertificate = document.createElement('div');
			divСertificate.className = 'div-certificate';

			// подготовка формочки для ввода данных
			let tableCertificate = document.createElement('table');
			let nameTable = tableCertificate.createCaption(); // создадим заголовок
  			tableCertificate.className = 'table-certificate';
  			nameTable.className = 'name-table';


			// после выбора вида справки создаем форму для ввода (старую форму удаляем)
			if (nameCertificate.value == 'scorpion') {
				nameTable.innerHTML = "<h1>Scorpion score table</h1>";
				let elem = document.body.children[0];
  				elem.remove();
  			} 
  			else {
  				nameTable.innerHTML = "<h1>Sub-zero score table</h1>";
				let elem = document.body.children[0];
  				elem.remove();
  			}
  			
  			// создаем заголовки таблице
			let th = tableCertificate.insertRow(0);
    		th.insertCell(0).outerHTML = "<th>Colum 1</th>";
    		th.insertCell(1).outerHTML = "<th>Column 2</th>";
    		th.insertCell(2).outerHTML = "<th>Column 3</th>";

    		//создаем саму таблицу
    		//вместо конкретного вычисляемого индекса в методах insertRow (ind) и insertCell (ind) можно и нужно использовать значение -1, тогда методы автоматически высчитают количество имеющихся строк (ячеек в строке) и добавят новую строку (ячейку) после всех уже существующих (строку ниже имеющихся, а ячейку -- правее имеющихся)
  			for (let i = 1; i <= row; i++) {
  				let newRow = tableCertificate.insertRow(-1); 
  				for (let j = 0; j <= 2; j++) {
  					let newCell = newRow.insertCell(-1)
  						if ( j == 0 ) {
							let newInput = document.createElement('input');
							newInput.type = 'text';
							newCell.appendChild(newInput);
						}
						if (j == 1) {
							let newIncrement = document.createElement('input');
							newIncrement.type = 'number';
							newCell.appendChild(newIncrement);
						}
						if (j == 2) {
							let newSelect = document.createElement('select');
							// наполним выпадающий  список данными
							data.forEach(function (item, id) {
					    		newSelect.options[id] = new Option(item.title, item.value);
					    		(newSelect.options[id].value == 'zero') 
								    ? newSelect.options[id].disabled = true 
								    : newSelect.options[id].disabled = false;
				      		})
							newCell.appendChild(newSelect);
						}
  				}
  			}

  			// вызываем создание div и table
			document.body.appendChild(divСertificate);
			divСertificate.appendChild(tableCertificate);
			

			// создадим кнопки добавить/удалить строку
  			let addButton = document.createElement("input");
  			addButton.type = 'button';
  			addButton.className = 'add-button';
  			addButton.value = 'add row';

  			let delButton = document.createElement("input");
  			delButton.type = 'button';
  			delButton.className = 'del-button';
  			delButton.value = 'delete row';


  			// вызываем создание кнопки добавить/удалить строку
  			tableCertificate.appendChild(addButton);
  			tableCertificate.appendChild(delButton);

  			//создаем прослушку для кнопки добавить
  			addButton.addEventListener('click', function () {
  				let tbody  = document.querySelector('.table-certificate').getElementsByTagName("TBODY")[0]; // обращаемся к нашей таблице .table-certificate, а именно к ее tbody, которая находится в первой таблице [0]
  				let newInput = document.createElement('input');
  				let newIncrement = document.createElement('input');
				newIncrement.type = 'number';
				let newSelect = document.createElement('select');
				// наполним выподающий список данными
				data.forEach(function (item, id) {
	    		newSelect.options[id] = new Option(item.title, item.value);
		    		(newSelect.options[id].value == 'zero') 
					    ? newSelect.options[id].disabled = true 
					    : newSelect.options[id].disabled = false;
	      		})

  				let row = document.createElement("tr");
  				let td1 = document.createElement("td");
			    let td2 = document.createElement("td");
			    let td3 = document.createElement("td");
			    
			    td1.appendChild(newInput);
			    td2.appendChild(newIncrement);
			    td3.appendChild(newSelect);

			    row.appendChild(td1);
    			row.appendChild(td2);
    			row.appendChild(td3);

    			tbody.appendChild(row);
  			});
  			
  			//создаем прослушку для кнопки удалить
  			delButton.addEventListener('click', function () {
         		let i = tableCertificate.rows.length;
         		if ( i == 2)
         			alert('You don\'t make a form with less than one entry.');
         		else
         			document.querySelector('.table-certificate').deleteRow(-1);
  			});
		});
});

	 function addUser(){
	
		
		var fname=document.getElementById("fname").value;
		var lname=document.getElementById("lname").value;
		var profile=document.getElementById("profile").value;
		var uname=document.getElementById("uname").value;
		var mail=document.getElementById("mail").value;
		var pass=document.getElementById("password").value;
		var dbObj = openDatabase('UserDB', '1.0', 'my first database', 2 * 1024 * 1024); 
		dbObj.transaction(function (tx) {  
			tx.executeSql('CREATE TABLE IF NOT EXISTS UserInfo(firstName, lastName, profile, userName, email, password)');  
		});
		dbObj.transaction(function (tx) {  
			tx.executeSql('insert into UserInfo(firstName, lastName, profile, userName, email, password) values(?,?,?,?,?,?)',[fname,lname,profile,uname,mail,pass]);  
		});
		alert("Created the new user successfully");
		
		
		dbObj.transaction(function (tx) {
			tx.executeSql('SELECT * FROM UserInfo', [], function (tx, results) {
				var list = [];
				var count=results.rows.length;
				
				for (i = 0; i < count; i++){
					
					var msg = '' + results.rows.item(i)['firstName'] + ''+ results.rows.item(i)['lastName'] ;
					list.push(msg);
				}
				let list1 = document.getElementById("user1");
				console.log(list.length);
				for(i=0; i<list.length;  i++){
					//let span1= document.createElement("span");
					//span1.setAttribute("class", "delete");
					//span1.innerHTML= x ;
					let li = document.createElement("li");
					//li.append(span1);
					li.setAttribute("class","info");
					li.innerHTML= list[i];
					list1.appendChild(li);
					
					//document.getElementById("user").innerHTML = '<ul><li><p>' + list +'</li></ul></p><a href="#" id = "delete" class=""></a>';
					console.log(msg);
					console.log(list);
				}	
				
								
			}, null);
			
				
				
		});	
		
			
		
		
		
	};
	
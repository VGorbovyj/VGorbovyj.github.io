<?
	/* Підключення до бази даних */
	$hostname = "localhost"; 
	$username = "root"; 
	$password = "";
	$dbName = "promo"; 

	/* Зміння, в якій будуть зберігатись дані */
	$table = "f_students";
 
	/* Створюємо з'єднання */
	mysql_connect($hostname, $username, $password) or die ("Не можу створити з'єднання");
 
	/* Вибираємо базу даних. Якщо винекне помилка - виводимо її */
	mysql_select_db($dbName) or die (mysql_error());

	/* Створюємо запит для передачі інформації в базу даних. 
		name, phone i mail - назви конкретних полей в БД;
		$_POST["name"], $_POST["phone"], $_POST["mail"] - змінні, в яких зберігаються дані отримані з форми */
 	$query = "INSERT INTO $table SET name='".$_POST['name']."', phone='".$_POST["phone"]."', mail='".$_POST["mail"]."'";

	/* Виконуємо запит. Якщо винекне помилка - виводимо її */
	mysql_query($query) or die(mysql_error());
 
	/* Закрываємо з'єднання' */
	mysql_close();
 
	/* У випадку вдалої операції, виводимо повідомлення */
	echo ("
		<div style=\"
				margin: 0 auto;
				margin-top: 10%;
				padding: 40px;
				width: 40%; 
				height: 240px;
				border-top: 10px solid rgb(66, 25, 20);
				background: rgba(66, 25, 20, .1);
				box-shadow: 0 0 4px rgba(0, 0, 0, .4);
				\">
				<div style=\"color: rgb(66, 25, 20); font-size: 36px;\">
					Ви підписались.<br> 
					Тепер Ви завжди будете в курсі наших новин.<br> 
				</div>
				<div style=\"float: right; margin-top: 40px; padding: 10px 20px; font-size: 46px; background: rgb(66, 25, 20);\">
				<a href=\"index.php\" style=\"text-decoration: none;\">
					<font style=\"margin-top: 10px; color: rgb(255, 255, 255); \">
					Повернутись назад.
					</font>
				</a>
				</div>
			</div>
	");
?>
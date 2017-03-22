<footer>

	<div class="main_3">
		<div class="row">
			<div class="container">
				<div class="col-4 conn" id="subscribe">
					<h1 class="m-headling">Підпишіться на наші новини</h1>
					<form method="POST" action="subscribe.php">
						<input type="text" name="name" id="name" placeholder="Ваше ім'я" size="35" 
	                        pattern="[A-Za-zА-Яа-яЁёЇїІі]{3,}" 
	                        title="Мінімум 3 букви. Ім'я не повинне містити цифри" 
	                        required>
						<input type="tel" name="phone" id="phone" placeholder="093*******" size="35" 
	                        pattern="(\[0-9]{2,3}\)([0-9]{3})([0-9]{2})([0-9]{2})" 
	                        title="Номер повинен бути записаний у такому форматі: 093*******. Наприклад: 0932027756"
	                        required>
	                    <input type="email" name="mail" id="mail" placeholder="your@mail.com" size="35" 
	                        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{1,8})" 
	                        title="E-mail не повинен містити кирилицю."
	                        required>
                       	<button type="submit">Підписатись</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="container">
			<div class="col-6 f-info">
				<div class="col-2 f-contacts">
					<p><i class="fa fa-map-marker" aria-hidden="true"></i> м. Харьков, вул. Кирпичова, 2 </p>
					<p><i class="fa fa-phone" aria-hidden="true"></i> (057) 707-65-75, (057) 707-64-31 </p>
				</div>
				<div class="col-2">
					<a href="http://www.kpi.kharkov.ua/ukr/" target="_blank"><img src="img/ntu_khpi_logo.png" alt="НТУ ХПІ офіційний сайт"></a>
				</div>
			</div>
		</div>
	</div>

</footer>
	<!--[if lt IE 9]>
	<script src="libs/html5shiv/es5-shim.min.js"></script>
	<script src="libs/html5shiv/html5shiv.min.js"></script>
	<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
	<script src="libs/respond/respond.min.js"></script>
	<![endif]-->
	<script src="libs/jquery/jquery-1.11.1.min.js"></script>
	<script src="libs/engine/engine.js"></script>
</body>
</html>
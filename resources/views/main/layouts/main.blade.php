<!doctype html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS -->
    <link rel="stylesheet" href="{{ asset('js/app.js') }}">
    <!-- Bootstrap CSS -->
    <link href="{{ asset('dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Jquery -->
    <script src="{{ asset('dist/js/jquery.min.js') }}"></script>
    <!-- Bootstrap JS -->
    <script src="{{ asset('dist/js/bootstrap.bundle.min.js') }}"></script>
    <title>Blog</title>
</head>
<body>
<div>
    <div class="container">
            <div id="app">
                @yield('content')
            </div>
    </div>

    <a href="#" class="crunchify-top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>

    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/0276f09879.js" crossorigin="anonymous"></script>
    <!-- JS -->
    <script src="{{ asset('js/app.js') }}"></script>



</div>
</body>
</html>






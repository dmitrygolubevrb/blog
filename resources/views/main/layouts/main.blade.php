<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TechNews - HTML and CSS Template</title>

    <link href="{{ asset('assets/img/favicon.png') }}" rel=icon>

    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,500' rel='stylesheet' type='text/css'>


    <link href="{{ asset('assets/fonts/font-awesome/font-awesome.min.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/css/mobile-menu.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/css/owl.carousel.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/css/owl.theme.default.min.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet">

    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">

    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body id="page-top" data-spy="scroll" data-target=".navbar">
<div id="main-wrapper">
    <!-- Page Preloader -->
    <div id="preloader">
        <div id="status">
            <div class="status-mes"></div>
        </div>
    </div>
    <!-- preloader -->

    <div class="uc-mobile-menu-pusher">
        <div class="content-wrapper">
            <div id="app">
                @yield('content')
            </div>
        </div>
        <!-- #content-wrapper -->

    </div>
    <!-- .offcanvas-pusher -->

    <a href="#" class="crunchify-top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>


</div>
<!-- #main-wrapper -->

<!-- jquery Core-->
<script src="{{ asset('assets/js/jquery-2.1.4.min.js') }}"></script>



<!-- Theme Menu -->
<script src="{{ asset('assets/js/mobile-menu.js') }}"></script>

<!-- Owl carousel -->
<script src="{{ asset('assets/js/owl.carousel.min.js') }}"></script>

<!-- Theme Script -->
<script src="{{ asset('assets/js/script.js') }}"></script>

<!-- Bootstrap -->
<script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
</body>
</html>

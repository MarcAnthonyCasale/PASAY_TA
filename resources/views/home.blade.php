@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div>
                    <b-navbar type="dark" variant="dark">
                      <b-navbar-nav>
                        <b-nav-item href="#">Home</b-nav-item>
                  
                        <!-- Navbar dropdowns -->
                        <b-nav-item-dropdown text="Lang" right>
                          <b-dropdown-item href="#">EN</b-dropdown-item>
                          <b-dropdown-item href="#">ES</b-dropdown-item>
                          <b-dropdown-item href="#">RU</b-dropdown-item>
                          <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>
                  
                        <b-nav-item-dropdown text="User" right>
                          <b-dropdown-item href="#">Account</b-dropdown-item>
                          <b-dropdown-item href="#">Settings</b-dropdown-item>
                        </b-nav-item-dropdown>
                      </b-navbar-nav>
                    </b-navbar>
                  </div>
            </div>
        </div>
    </div>
</div>
@endsection

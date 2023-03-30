@extends('layouts.userLayout')

@section('content')
    <div class="text-blueGray-700">
        <div class="container items-center shadowdark:bg-gray-800 px-7 py-20 lg:px-10">
            <div class="flex flex-col w-full max-w-md p-6 mx-auto my-1 bg-white rounded-lg md:mt-0">
                <div class="self-center -mb-4 text-xl font-light text-gray-600 sm:text-2xl dark:text-black font-bold">
                    Welcome Back, Doctors!
                </div>
                <div class="mt-8">
                    <div class="mt-6">
                        <form method="POST" action="{{ route('login') }}" class="space-y-5">
                            @csrf
                            <div>
                                <label for="email" class="block text-sm font-medium text-neutral-600">{{ __('Email Address') }}</label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" value="{{ old('email') }}" required autocomplete="email" autofocus class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 @error('email') is-invalid @enderror" />
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label for="password" class="block text-sm font-medium text-neutral-600">{{ __('Password') }}</label>
                                <div class="mt-1">
                                    <input id="password" name="password" type="password" required autocomplete="current-password" class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 @error('password') is-invalid @enderror" />
                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center">
                                    <input name="remember" id="remember" type="checkbox" {{ old('remember') ? 'checked' : '' }} class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                                    <label for="remember" class="block ml-2 text-sm text-neutral-600">{{ __('Remember Me') }}</label>
                                </div>
                                @if (Route::has('password.request'))
                                    <div class="text-sm">
                                        <!-- <a href="{{ route('password.request') }}" class="font-medium text-blue-600 hover:text-blue-500">{{ __('Forgot Your Password?') }}</a> -->
                                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">{{ __('Forgot Your Password?') }}</a>
                                    </div>
                                @endif
                            </div>
                            <div>
                                <button type="submit" class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">{{ __('Login') }}</button>
                            </div>
                        </form>
                        <div class="flex items-center justify-center mt-6">
                            <a class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-black dark:text-black dark:hover:text-black">
                                <span class="ml-2">
                                    Don't have an account?
                                    <a href="/doctor/register" class="text-sm text-blue-500 underline hover:text-blue-700 ml-2">
                                        Register
                                    </a>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection 

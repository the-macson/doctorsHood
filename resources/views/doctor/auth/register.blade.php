@extends('layouts.userLayout')

@section('content')
<div class="text-blueGray-700">
    <div class="container items-center shadowdark:bg-gray-800 px-18 py-20 lg:px-20">
        <div class="flex flex-col w-full max-w-md p-10 mx-auto my-1 bg-white rounded-lg md:mt-0">
            <div class="self-center mb-1 text-xl font-light text-gray-600 sm:text-2xl dark:text-black font-bold">
                Welcome to DoctorsHood
            </div>
            <div class="mt-8">
                <div class="mt-6">
                    <form method="POST" action="{{ route('register') }}" class="space-y-5">
                        @csrf
                        <input id="role" type="hidden" name="role" value="doctor" required />
                        <div>
                            <label for="name" class="block text-sm font-medium text-neutral-600">{{ __('Full Name') }}</label>
                            <div class="mt-1">
                                <input id="name" type="text" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 @error('name') is-invalid @enderror" />
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-neutral-600">{{ __('Phone Number (without country code)') }}</label>
                            <div class="mt-1">
                                <input id="phone" type="text" name="phone" value="{{ old('phone') }}" required autocomplete="phone" class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 @error('phone') is-invalid @enderror" />
                                @error('phone')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-neutral-600">{{ __('Email Address') }}</label>
                            <div class="mt-1">
                                <input id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email" class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 @error('email') is-invalid @enderror" />
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
                                <input id="password" type="password" name="password" required autocomplete="new-password" class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 @error('password') is-invalid @enderror" />
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label for="password-confirm" class="block text-sm font-medium text-neutral-600">{{ __('Confirm Password') }}</label>
                            <div class="mt-1">
                                <input id="password-confirm" type="password" name="password_confirmation" required autocomplete="new-password" class="block w-full px-4 py-1 text-base text-neutral-600 placeholder-gray-300 border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">{{ __('Register') }}</button>
                        </div>
                    </form>
                    <div class="flex items-center justify-center mt-6">
                        <a class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-black dark:text-black dark:hover:text-black">
                            <span class="ml-2">
                                Already have an account?
                                <a href="/doctor/login" class="text-sm text-blue-500 underline hover:text-blue-700 ml-2">
                                    Sign In
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
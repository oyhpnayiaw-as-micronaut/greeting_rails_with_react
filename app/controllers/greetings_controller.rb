class GreetingsController < ApplicationController
  def random
    greeting = Greeting.order('RANDOM()').first

    greeting = { message: 'Create a greeting first!' } if greeting.nil?

    render json: greeting
  end
end

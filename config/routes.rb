Rails.application.routes.draw do
  get 'greetings/random' => 'greetings#random'

  root 'root#index'
  get '*path' => 'root#index'
end

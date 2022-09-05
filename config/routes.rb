Rails.application.routes.draw do
  root to: 'contacts#home'
  get 'download_pdf', to: "contacts#download_pdf"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :contacts, only: [:new, :create, :home]

end

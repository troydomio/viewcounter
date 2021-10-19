Rails.application.routes.draw do

 get "/count", to: 'counters#index'
 match '*path', to: 'application#cors_preflight_check', via: [:options]
end

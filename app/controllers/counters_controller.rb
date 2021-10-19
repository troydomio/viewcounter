class CountersController < ApplicationController

    def index 
        count = Counter.find(1)
        Counter.increment_counter(:view, 1)
    render json: count.to_json(except: [:created_at, :updated_at, :id])
    end
end

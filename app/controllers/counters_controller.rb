class CountersController < ApplicationController

    def index 
        count = Counter.all
    render json: count.to_json(except: [:created_at, :updated_at, :id])
    end
end

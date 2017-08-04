require 'data_mapper'
require 'sinatra/base'
require 'dm-postgres-adapter'

require_relative 'models/thermostat.rb'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/thermostat_#{ENV['RACK_ENV']}")
DataMapper.finalize

class Thermostat < Sinatra::Base

  get '/' do
    @information
    erb(:index)
  end

  post '/' do
    @information = params[:json]
  end

end

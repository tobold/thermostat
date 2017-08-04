require 'data_mapper'
require 'sinatra/base'
require 'dm-postgres-adapter'
require 'json'

require_relative 'models/thermostat.rb'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/thermostat_#{ENV['RACK_ENV']}")
DataMapper.finalize


class Thermostat_controller < Sinatra::Base

  post '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    js = request.body.read
    my_hash = JSON.parse(js)
    Thermostat.get(1).update(:temperature => my_hash['temp'], :city => my_hash['city'])
  end

  get '/' do
    headers 'Access-Control-Allow-Origin' => '*'
    thermostat = Thermostat.get(1)
    return JSON.generate({ temp: thermostat.temperature, city: thermostat.city })
  end
end

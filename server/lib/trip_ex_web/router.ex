defmodule TripExWeb.Router do
  use TripExWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug TripExWeb.Plugs.SetCurrentUser
  end

  scope "/" do
    pipe_through :api

    forward "/api", Absinthe.Plug,
      schema: TripExWeb.Schema.Schema

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: TripExWeb.Schema.Schema,
      socket: TripExWeb.UserSocket
    end
end

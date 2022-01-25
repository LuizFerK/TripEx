defmodule TripExWeb.SubscriptionCase do
  @moduledoc """
  This module defines the test case to be used by
  subscription tests.
  """

  use ExUnit.CaseTemplate

  using do
    quote do
      # Import conveniences for testing with channels
      use Phoenix.ConnTest

      use TripExWeb.ChannelCase
      use Absinthe.Phoenix.SubscriptionTest,
        schema: TripExWeb.Schema.Schema
      import TripEx.TestHelpers

      defp auth_user(conn, user) do
        token = TripExWeb.AuthToken.sign(user)
        put_req_header(conn, "authorization", "Bearer #{token}")
      end

      setup do
        places_fixture()

        {:ok, socket} =
            Phoenix.ChannelTest.connect(TripExWeb.UserSocket, %{})
        {:ok, socket} =
            Absinthe.Phoenix.SubscriptionTest.join_absinthe(socket)

        {:ok, socket: socket}
      end
    end
  end
end

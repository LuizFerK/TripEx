defmodule TripExWeb.Resolvers.Accounts do
  alias TripEx.Accounts
  alias TripExWeb.Schema.ChangesetErrors

  def signin(_, %{username: username, password: password}, _) do
    case Accounts.authenticate(username, password) do
      :error ->
        {:error, "Whoops, invalid credentials!"}

      {:ok, user} ->
        token = TripExWeb.AuthToken.sign(user)
        {:ok, %{user: user, token: token}}
    end
  end

  def signup(_, args, _) do
    case Accounts.create_user(args) do
      {:error, changeset} ->
        {
          :error,
          message: "Could not create account",
          details: ChangesetErrors.error_details(changeset)
        }

      {:ok, user} ->
        token = TripExWeb.AuthToken.sign(user)
        {:ok, %{user: user, token: token}}
    end
  end

  def me(_, _, %{context: %{current_user: user}}) do
    {:ok, user}
  end

  def me(_, _, _) do
    {:ok, nil}
  end
end

defmodule TripEx.Repo do
  use Ecto.Repo,
    otp_app: :trip_ex,
    adapter: Ecto.Adapters.Postgres
end

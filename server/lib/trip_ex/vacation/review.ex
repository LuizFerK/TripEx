defmodule TripEx.Vacation.Review do
  use Ecto.Schema
  import Ecto.Changeset

  @required_fields [:rating, :comment, :place_id]

  schema "reviews" do
    field :rating, :integer
    field :comment, :string

    belongs_to :place, TripEx.Vacation.Place
    belongs_to :user, TripEx.Accounts.User

    timestamps(type: :utc_datetime)
  end

  def changeset(review, attrs) do
    review
    |> cast(attrs, @required_fields)
    |> validate_required(@required_fields)
    |> assoc_constraint(:place)
    |> assoc_constraint(:user)
  end
end

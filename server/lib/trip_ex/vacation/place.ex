defmodule TripEx.Vacation.Place do
  use Ecto.Schema
  import Ecto.Changeset

  @required_fields [
    :name,
    :slug,
    :description,
    :location,
    :price_per_night,
    :image,
    :image_thumbnail
  ]
  @optional_fields [:max_guests, :pet_friendly, :pool, :wifi]

  schema "places" do
    field :name, :string
    field :slug, :string
    field :description, :string
    field :location, :string
    field :price_per_night, :decimal
    field :image, :string
    field :image_thumbnail, :string
    field :max_guests, :integer, default: 2
    field :pet_friendly, :boolean, default: false
    field :pool, :boolean, default: false
    field :wifi, :boolean, default: false

    has_many :bookings, TripEx.Vacation.Booking
    has_many :reviews, TripEx.Vacation.Review

    timestamps()
  end

  def changeset(place, attrs) do
    place
    |> cast(attrs, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
    |> unique_constraint(:name)
    |> unique_constraint(:slug)
  end
end

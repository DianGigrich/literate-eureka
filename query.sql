SELECT movies.name AS Film, reviews.review AS Review
FROM reviews
JOIN movies
ON  movies.id = reviews.movie_id;
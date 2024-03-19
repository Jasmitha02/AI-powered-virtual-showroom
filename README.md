### Recommendation and Price Prediction System for Used Cars

#### Overview
This project aims to develop a recommendation and price prediction system for used cars listed on Craigslist based on historical sales data scrapped from all over the United States between April to May of 2021. The system is designed to assist both buyers and sellers by providing recommendations for similar listings and predicting ballpark prices for specific models and features.

#### Key Objectives
1. **Recommendation System:** Develop a content-based recommender system to suggest similar listings to users based on vehicle features.
2. **Price Prediction Model:** Create a model to predict prices for specific car models and features, assisting buyers and sellers in determining fair market values.

#### Dataset
- The dataset was compiled by a data contributor, Austin Reese, and obtained from Kaggle. It contains relevant information such as vehicle price, condition, manufacturer, location, and other categories.
- Data cleaning involved removing irrelevant columns, handling missing values, and removing outliers to ensure data quality.

#### Methodology
1. **Recommendation System Development:** Utilized TdIdfVectorizer and cosine_similarity from scikit-learn to develop a content-based recommendation system. The system suggests the top 6 most similar cars to a given input.
2. **Price Prediction Model:** Explored correlations between variables and preprocessed the data using LabelEncoder from sklearn. Evaluated three regression models and selected Random Forest Regressor, achieving an accuracy score of 87.79%.

#### Insights
- Most listings are concentrated in the top 10 most populated states, with Ford, Chevrolet, and Toyota being the most popular manufacturers.
- Luxury cars (sedans and SUVs) have a significant market, suggesting a focus for the recommendation engine.
- California has the highest number of listings with an average price lower than Washington state, indicating potential market dynamics.
- Gasoline engines dominate, except for pickups and trucks, which show a split between gas and diesel engines.
- Most cars have below-average miles driven per year, indicating good value, especially for those in excellent or good condition.
- Newer cars tend to have higher average prices, influenced by factors such as vintage cars and luxury levels.

#### Conclusion
The recommendation and price prediction system developed in this project can greatly benefit both buyers and sellers navigating the used car market on Craigslist. By leveraging historical sales data and machine learning techniques, users can make more informed decisions regarding their car transactions.

For detailed implementation instructions and usage guidelines, please refer to the project documentation.

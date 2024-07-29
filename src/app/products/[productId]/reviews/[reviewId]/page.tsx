const Review = ({
    params,
}: {
    params: { productId: string; reviewId: string };
}) => {
    return (
        <div>
            Review {params.productId} product {params.reviewId}
        </div>
    );
};

export default Review;

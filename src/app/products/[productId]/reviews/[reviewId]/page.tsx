import { notFound } from 'next/navigation';

const Review = ({
    params,
}: {
    params: { productId: string; reviewId: string };
}) => {
    if (parseInt(params.reviewId) > 1000) {
        return notFound();
    }
    return (
        <div>
            Review {params.productId} product {params.reviewId}
        </div>
    );
};

export default Review;

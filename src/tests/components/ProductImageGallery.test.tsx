import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should return null if empty imageUrl array is empty', () => {
        const imageUrls : string[] = [];
        const {container} = render(<ProductImageGallery imageUrls={imageUrls} />)
        expect(container.firstChild).toBeNull();
    })

    it('should return the image if the imageUrl array is no tmepty', () => {
        const imageUrls : string[] = ["url1", "url2"];
        render(<ProductImageGallery imageUrls={imageUrls} />)
        const images = screen.getAllByRole('img');
        images.forEach((image, index) => {
            expect(image).toHaveAttribute('src', imageUrls[index]);
        })
        
    })
})
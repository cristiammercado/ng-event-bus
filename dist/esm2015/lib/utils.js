/* tslint:disable:variable-name no-bitwise */
/**
 * Utilitary class.
 *
 * @author Cristiam Mercado
 * @since 2.0.0
 * @version 2.0.0
 */
export class Utils {
    /**
     * Generates UUID version 4. The solution above uses Math.random() for brevity, however Math.random() is not
     * guaranteed to be a high-quality RNG.
     *
     * @return UUID version 4.
     */
    static uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUU3Qzs7Ozs7O0dBTUc7QUFDSCxNQUFNLE9BQU8sS0FBSztJQUNoQjs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxJQUFJO1FBQ2hCLE9BQU8sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQzNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMxQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lIG5vLWJpdHdpc2UgKi9cblxuLyoqXG4gKiBVdGlsaXRhcnkgY2xhc3MuXG4gKlxuICogQGF1dGhvciBDcmlzdGlhbSBNZXJjYWRvXG4gKiBAc2luY2UgMi4wLjBcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgVVVJRCB2ZXJzaW9uIDQuIFRoZSBzb2x1dGlvbiBhYm92ZSB1c2VzIE1hdGgucmFuZG9tKCkgZm9yIGJyZXZpdHksIGhvd2V2ZXIgTWF0aC5yYW5kb20oKSBpcyBub3RcbiAgICogZ3VhcmFudGVlZCB0byBiZSBhIGhpZ2gtcXVhbGl0eSBSTkcuXG4gICAqXG4gICAqIEByZXR1cm4gVVVJRCB2ZXJzaW9uIDQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHV1aWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwO1xuICAgICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
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
  public static uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

}

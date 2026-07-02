import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Product } from "../types";

export interface CartItem {
  product: Product;
  quantity: number;
  isPlan: boolean; // Retatrutide can be bought as 1 Month Plan or 30mg vial
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, isPlan: boolean, delta: number) => void;
  onRemoveItem: (productId: string, isPlan: boolean) => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartProps) {
  const getPrice = (item: CartItem) => {
    if (item.isPlan && item.product.monthlyPlanPrice) {
      return item.product.monthlyPlanPrice;
    }
    return item.product.promoPrice;
  };

  const getTitle = (item: CartItem) => {
    if (item.isPlan) {
      return `${item.product.name} (1-Month Plan)`;
    }
    return `${item.product.name} (${item.product.concentration} Vial)`;
  };

  const subtotal = cartItems.reduce((acc, item) => acc + getPrice(item) * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15; // Free shipping over $200 USD
  const total = subtotal > 0 ? subtotal + shipping : 0;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Format WhatsApp Message
    let message = `Hello VSC Peptides, I would like to place an order for the following scientific research compounds:\n\n`;
    
    cartItems.forEach((item, index) => {
      const title = getTitle(item);
      const price = getPrice(item);
      message += `${index + 1}. ${title} x${item.quantity} - $${price * item.quantity} USD\n`;
    });

    message += `\n-----------------------\n`;
    message += `Subtotal: $${subtotal} USD\n`;
    message += `Shipping: ${shipping === 0 ? "FREE" : `$${shipping} USD`}\n`;
    message += `*Estimated Total: $${total} USD*\n\n`;
    message += `I look forward to your payment details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15133549941?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div
            id="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-brand-box border-l border-white/5 flex flex-col justify-between shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-brand-cyan" />
                <span className="text-lg font-display font-black text-white tracking-wide uppercase">
                  YOUR RESEARCH ORDER
                </span>
                <span className="text-xs font-mono bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded-full font-bold">
                  {cartItems.length}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 mb-6">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Your cart is empty
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xs mx-auto">
                    Explore our catalog of premium research peptides and add vials to initiate your order.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan font-display font-bold text-xs tracking-wider uppercase transition-colors hover:bg-brand-cyan hover:text-brand-dark"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <motion.div
                    key={`${item.product.id}-${item.isPlan ? "plan" : "vial"}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-2xl bg-brand-dark/40 border border-white/5 flex gap-4 items-center relative group"
                  >
                    {/* Tiny visual thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-brand-dark border border-white/5 overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details content */}
                    <div className="flex-1 text-left">
                      <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-wider block uppercase leading-none">
                        {item.isPlan ? "Monthly Plan" : "Standard Vial"}
                      </span>
                      <h5 className="text-sm font-display font-bold text-white mt-1 leading-tight">
                        {item.product.name}
                      </h5>
                      <span className="text-xs font-mono font-bold text-brand-cyan text-glow-cyan block mt-1">
                        ${getPrice(item)} USD
                      </span>

                      {/* Quantity Selector controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="inline-flex items-center bg-brand-box rounded-lg border border-white/5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.isPlan, -1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-mono font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.isPlan, 1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.isPlan)}
                          className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer calculations & checkout trigger */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-brand-dark/40 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Subtotal</span>
                    <span className="font-mono text-white">${subtotal} USD</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-slate-400">Certified Shipping</span>
                    <span className="font-mono text-white">
                      {shipping === 0 ? (
                        <span className="text-emerald-400 font-bold tracking-wider">FREE</span>
                      ) : (
                        `$${shipping} USD`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-[10px] text-right text-slate-500">
                      * Free shipping on orders over $200 USD
                    </div>
                  )}
                  <div className="flex justify-between items-baseline pt-3 border-t border-white/5">
                    <span className="text-md font-display font-black text-white">ESTIMATED TOTAL</span>
                    <span className="text-2xl font-mono font-black text-brand-cyan text-glow-cyan">
                      ${total} USD
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-dark font-display font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.6)] hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>CONFIRM ORDER VIA WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 text-brand-dark" />
                  </button>
                  <span className="text-[9px] text-slate-500 block text-center mt-2.5 uppercase tracking-wider font-mono">
                    Secure, encrypted redirect to WhatsApp Business
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

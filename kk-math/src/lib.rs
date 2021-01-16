mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct KKMath {
    value_a: f64,
    value_b: f64
}

#[wasm_bindgen]
impl KKMath {
    pub fn new(value_a: f64, value_b: f64) -> KKMath {
        return KKMath {
            value_a,
            value_b
        };
    }

    pub fn add(&self) -> f64 {
        return self.value_a + self.value_b;
    }
}

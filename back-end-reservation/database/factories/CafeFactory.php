<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cafe>
 */
class CafeFactory extends Factory
{

    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array
    {
        return [
            'title' => $this->faker->company(),
            'address' => $this->faker->address(),
            'owner_name' => $this->faker->name(),
            'bank_account_number' => $this->faker->creditCardNumber(),
            'number_of_tables' => $this->faker->numberBetween($min = 3, $max = 25),
            'type' => 'restaurant',
        ];
    }
}

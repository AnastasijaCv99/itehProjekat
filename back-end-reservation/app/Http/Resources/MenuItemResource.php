<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\MenuResource;


class MenuItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        //$menu = $this->resource[0];
        return [
            'id'=> array_column($request, 'id'),
            'drink_food_title'=> array_column($request, 'drink_food_title'),
            'ingredients'=> array_column($request, 'ingredients'),
            'price'=> array_column($request, 'price'),
            'menu_id'=> new MenuResource(array_column($request, 'menu_id'),)
        ];
    }
}

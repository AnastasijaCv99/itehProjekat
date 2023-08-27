<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'id'=>$this->resource->id,
            'menu_name'=>$this->resource->menu_name,
            'cafe_id'=> new CafeResource($this->resource->cafe_id)
            //i cafe bi trebalo sad da poziva svoj resurs al aj da vidimo dal uopste radi sve
        ];
    }
}

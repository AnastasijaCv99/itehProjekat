<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CafeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = 'cafe';
     public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'id'=>$this->resource->id,
            'title'=>$this->resource->title,
            'address'=>$this->resource->address,
            'owner_name'=>$this->resource->owner_name,
            'bank_account_number'=>$this->resource->bank_account_number,
            'type'=>$this->resource->type,
            'number_of_tables'=>$this->resource->number_of_tables,
        ];
    }
}

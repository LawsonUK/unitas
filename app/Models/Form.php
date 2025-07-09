<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Form extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'description',
        'frequency',
        'structure',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'structure' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Get the frequency options.
     */
    public static function getFrequencyOptions(): array
    {
        return [
            'Daily' => 'Daily',
            'Weekly' => 'Weekly',
            'Monthly' => 'Monthly',
            'Yearly' => 'Yearly',
        ];
    }

    /**
     * Scope a query to only include active forms.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to filter by frequency.
     */
    public function scopeByFrequency($query, string $frequency)
    {
        return $query->where('frequency', $frequency);
    }

    /**
     * Get the form structure as an array.
     */
    public function getStructureAttribute($value)
    {
        return json_decode($value, true) ?? [];
    }

    /**
     * Set the form structure.
     */
    public function setStructureAttribute($value)
    {
        $this->attributes['structure'] = is_array($value) ? json_encode($value) : $value;
    }
}

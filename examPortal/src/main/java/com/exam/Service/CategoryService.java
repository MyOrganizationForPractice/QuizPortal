package com.exam.Service;

import java.util.List;
import java.util.Set;

import com.exam.entity.Category;

public interface CategoryService {
   public Category addCategory(Category category);
   
   public Category updateCategory(Category category);
   
   public List<Category> getCategories();
   
   public Category getCategory(Long categoryId);
   
   public void deleteCategory(Long categoryId);
}
